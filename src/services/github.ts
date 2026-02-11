import axios from 'axios';

import { GITHUB_ACCOUNTS } from '@/common/constant/github';

const GITHUB_USER_ENDPOINT = 'https://api.github.com/graphql';

const GITHUB_USER_QUERY = `query($username: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $username) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export const fetchGithubData = async (
  username: string,
  token: string | undefined,
) => {
  const now = new Date();
  // Use UTC so the range is correct regardless of server timezone.
  // Request full last 365 days so the contribution calendar shows all months.
  const to = now.toISOString();
  const fromDate = new Date(Date.UTC(
    now.getUTCFullYear() - 1,
    now.getUTCMonth(),
    now.getUTCDate(),
    0,
    0,
    0,
    0,
  ));
  const from = fromDate.toISOString();

  const response = await axios.post(
    GITHUB_USER_ENDPOINT,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username,
        from,
        to,
      },
    },
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    },
  );

  const status: number = response.status;
  const responseJson = response.data;

  if (status > 400) {
    return { status, data: {} };
  }

  return { status, data: responseJson.data.user };
};

export const getGithubUser = async (type: string) => {
  const account = GITHUB_ACCOUNTS.find(
    (account) => account?.type === type && account?.is_active,
  );

  if (!account) {
    throw new Error('Invalid user type');
  }

  const { username, token } = account;
  return await fetchGithubData(username, token);
};
