import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faEnvelope,
    faStar,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { addSum, addData } from '../redux/actions/index';

const sumStateToProps = state => {
    return { sum: state.sum };
};

const dataStateToProps = state => {
    return { data: state.data };
};

function sumDispatchToProps(dispatch) {
    return {
        addSum: sum => dispatch(addSum(sum))
    };
}

function dataDispatchToProps(dispatch) {
    return {
        addData: data => dispatch(addData(data))
    };
}

const axiosGitHubGraphQL = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: {
        Authorization: 'bearer your_token'
    }
});

const GET_RATE = `
{
    search(   
      type: USER, query:"location:Kharkiv sort:followers-desc"
      first: 10) {
      nodes {
        ... on User {
          name
          login
          avatarUrl
          url
          bio
          location
          email
          repositories{totalCount}
          topRepositories(first: 100, orderBy:{field: STARGAZERS, direction: DESC}) {
            edges {
              node {
                stargazers{totalCount}
              }
            }
          }
        }
      }
    }
  }
`;
const Divider = styled.hr`
    background: rgba(128, 128, 128, 0.5);
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    border: 0;
`;
const Avatar = styled.img`
    width: 75px;
    margin-top: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const Info = styled.div`
    display: flex;
    width: 88%;
    flex-flow: column;
    margin-top: 10px;
`;

const Login = styled.div`
    width: 88%;
    display: flex;
`;

const Status = styled.div`
    margin-top: 10px;
    padding-left: 10px;
`;

const Link = styled.a`
    text-decoration: blink;
    padding-left: 10px;
    color: #2664d9;
`;

const Name = styled.p`
    padding-left: 10px;
    margin: 0;
`;

const Icons = styled.div`
    display: flex;
    margin-top: 10px;
    color: #858585;
`;

const LocationIcon = styled.div`
    padding-left: 10px;
`;

const MailIcon = styled.div`
    padding-left: 40px;
`;

const StarIcon = styled.div`
    padding-left: 40px;
`;

const Stars = styled.div`
    padding-left: 10px;
`;

const Location = styled.div`
    padding-left: 10px;
`;

const MailAdress = styled.div`
    padding-left: 10px;
`;

const Block = styled.div`
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
`;

const Loading = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
`;

class ConnectedUsers extends React.Component {
    constructor(props) {
        super(props);
        this.getSum = this.getSum.bind(this);
    }

    componentDidMount() {
        this.onFetchFromGitHub();
    }

    GET_SUM_FIRST_HUNDRED = login => `query 
{
  search(   
    type: USER, query:"user:${login}"
    first: 1) {
    nodes {
      ... on User {
        login
        repositories (first:100) {
      pageInfo {
        hasNextPage,
        endCursor
      },
      nodes {
        stargazers{totalCount}
      }
      }
    }
  }
}
}`;

    GET_SUM_HUNDRED = (login, after) =>
        `query 
{
  search(   
    type: USER, query:"user:${login}"
    first: 1) {
    nodes {
      ... on User {
        login
        repositories (first:100, after:"${after}") {
      pageInfo {
        hasNextPage,
        endCursor
      },
      nodes {
        stargazers{totalCount}
      }
      }
    }
  }
}
}`;

    onFetchSumHundredFromGitHub = (user, number, endCursor) => {
        const that = this;
        const after = endCursor.toString();
        const login = user;
        const key = number;
        axiosGitHubGraphQL
            .post('', { query: that.GET_SUM_HUNDRED(login, after) })
            .then(result => {
                let array = result.data.data.search.nodes[0].repositories;
                that.getSumHundred(array, key);
            });
    };

    onFetchSumForFirstHundredFromGitHub = (user, number) => {
        const that = this;
        const login = user;
        const key = number;
        axiosGitHubGraphQL
            .post('', { query: that.GET_SUM_FIRST_HUNDRED(login) })
            .then(result => {
                let array = result.data.data.search.nodes[0].repositories;
                that.getSumFirstHundred(array, key, login);
            });
    };

    onFetchFromGitHub = () => {
        const that = this;
        axiosGitHubGraphQL
            .post('', { query: GET_RATE })
            .then(result => {
                let array = result.data.data.search.nodes;
                for (var i = 0; i < 10; i++) {
                    this.props.addData({
                        data: [
                            array[i].avatarUrl,
                            array[i].bio,
                            array[i].email,
                            array[i].location,
                            array[i].login,
                            array[i].name,
                            array[i].url
                        ]
                    });
                    if (array[i].repositories.totalCount > 100) {
                        that.onFetchSumForFirstHundredFromGitHub(
                            array[i].login,
                            i
                        );
                    } else {
                        that.getSum(array[i].topRepositories.edges, i);
                    }
                }
            })
            .catch(function(error) {
                alert(error);
            });
    };

    getSumHundred(array, number, name) {
        let key = number;
        let summ = 0;
        const login = name;
        const { sum } = this.props;
        array.nodes.forEach(element => {
            summ += element.stargazers.totalCount;
        });
        summ += sum[key];
        this.props.addSum({
            sum: [summ, key]
        });
    }

    getSumFirstHundred(array, number, name) {
        let key = number;
        let sum = 0;
        const login = name;
        array.nodes.forEach(element => {
            sum += element.stargazers.totalCount;
        });
        this.props.addSum({
            sum: [sum, key]
        });
        if (array.pageInfo.hasNextPage === true) {
            this.onFetchSumHundredFromGitHub(
                login,
                key,
                array.pageInfo.endCursor
            );
        }
    }

    getSum(array, number) {
        let key = number;
        let sum = 0;

        if (array !== undefined) {
            array.forEach(element => {
                sum += element.node.stargazers.totalCount;
            });
        }
        this.props.addSum({
            sum: [sum, key]
        });
    }

    render() {
        const { data, sum } = this.props;
        return (
            <>
                {data.length === 0 ? (
                    <Loading>
                        <FontAwesomeIcon
                            icon={faSpinner}
                            size="4x"
                            spin
                            pulse
                        />
                    </Loading>
                ) : (
                    <>
                        <Divider />

                        {data.map(user => (
                            <>
                                <Block>
                                    <Avatar src={user.avatarUrl}></Avatar>
                                    <Info>
                                        <Login>
                                            <Link
                                                href={user.url}
                                                target="_blank"
                                            >
                                                {user.login}
                                            </Link>
                                            <Name>{user.name}</Name>
                                        </Login>
                                        <Status>{user.bio}</Status>
                                        <Icons>
                                            <LocationIcon>
                                                <FontAwesomeIcon
                                                    size="xs"
                                                    icon={faMapMarkerAlt}
                                                ></FontAwesomeIcon>
                                            </LocationIcon>
                                            <Location>{user.location}</Location>
                                            {user.email !== '' ? (
                                                <>
                                                    <MailIcon>
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            size="xs"
                                                        ></FontAwesomeIcon>
                                                    </MailIcon>
                                                    <MailAdress>
                                                        {user.email}
                                                    </MailAdress>
                                                </>
                                            ) : null}
                                            <StarIcon>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    size="xs"
                                                ></FontAwesomeIcon>
                                            </StarIcon>
                                            <Stars>
                                                {this.props.sum[
                                                    data.indexOf(user)
                                                ] === undefined
                                                    ? ' '
                                                    : Number(
                                                          this.props.sum[
                                                              data.indexOf(user)
                                                          ]
                                                      ).toLocaleString()}
                                            </Stars>
                                        </Icons>
                                    </Info>
                                </Block>
                                <Divider />
                            </>
                        ))}
                    </>
                    // )
                )}
            </>
        );
    }
}

const UsersWithSumState = connect(
    sumStateToProps,
    null
)(ConnectedUsers);

const UsersWithDataState = connect(
    dataStateToProps,
    null
)(UsersWithSumState);

const UsersWithSumDispatched = connect(
    null,
    sumDispatchToProps
)(UsersWithDataState);

const Users = connect(
    null,
    dataDispatchToProps
)(UsersWithSumDispatched);

export default Users;
