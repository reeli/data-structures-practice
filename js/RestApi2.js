const axios = require("axios");

async function getWinnerTotalGoals(competition, year) {
  const getFoodOutlet = (params) => {
    return axios
      .get(`https://jsonmock.hackerrank.com/api/food_outlets`, {
        params,
      })
      .then((res) => {
        return res.data.data[0].winner;
      });
  };
  const getFootballMatchesApi = (params) => {
    return axios
      .get(`https://jsonmock.hackerrank.com/api/football_matches`, { params })
      .then((res) => {
        return res.data;
      });
  };

  const winner = await getCompetitionWinnerApi({ name: competition, year });

  const countScore = async (team, page) => {
    const res = await getFootballMatchesApi({
      competition,
      [team]: winner,
      year,
      page,
    });

    const total = res.data.reduce((t, i) => {
      return t + Number(i[`${team}goals`]);
    }, 0);

    if (page < res.data.total_pages) {
      return countScore(team, page + 1) + total;
    }

    return total;
  };

  return (await countScore("team1", 1)) + (await countScore("team2", 1));
}

getWinnerTotalGoals("UEFA Champions League", 2011).then((data) =>
  console.log(data)
);
