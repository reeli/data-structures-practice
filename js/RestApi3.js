const axios = require("axios");

const getFoodOutletApi = (params) => {
  return axios
    .get(`https://jsonmock.hackerrank.com/api/food_outlets`, {
      params,
    })
    .then((res) => {
      return res.data
    });
};

async function getRelevantFoodOutlets(city, maxCost) {
  const filterCityNameByEstimatedCost = (res) => {
    return res.filter((item) => {
      return item.estimated_cost <= maxCost
    }).map(item => item.name);
  };

  async function filterMatchResults(page = 1) {
    const resp = await getFoodOutletApi({city, page});
    const totalPage = resp.total_pages

    const res = filterCityNameByEstimatedCost(resp.data)

    if (page < totalPage) {
      return [].concat(res).concat(await filterMatchResults(page + 1))
    }

    return res
  }

  return filterMatchResults(1)
}

getRelevantFoodOutlets("Denver", 50).then(data => {
  console.log(data)
})
