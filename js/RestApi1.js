const axios = require("axios");

async function getNumDraws(year) {
  const countPerPage = 20;
  const getFootballMatchesApi = (params) => {
    return axios.get(`https://jsonmock.hackerrank.com/api/football_matches`, {params}).then(res => {
      return res.data
    })
  }

  const {total_pages} = await getFootballMatchesApi({year, page: countPerPage});

  let list = [];
  for (let i = 1; i <= total_pages; i++) {
    const fn = getFootballMatchesApi({year, page: i}).then(res => {
      return res.data.reduce((res, item) => {
        if (item.team1goals === item.team2goals) {
          return res + 1;
        }
        return res
      }, 0)
    });

    list.push(fn)
  }

  return Promise.all(list).then(nums => {
    return nums.reduce((res, item) => {
      return res + item
    }, 0)
  });
}

getNumDraws(2011).then((data)=>{
  console.log(data)
})
