import ApiWrapper from "./ApiWrapper";

var mockdata = {
  users: [
    {
      login: "mojombo",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mojombo",
      html_url: "https://github.com/mojombo",
      followers_url: "https://api.github.com/users/mojombo/followers",
      following_url:
        "https://api.github.com/users/mojombo/following{/other_user}",
      gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
      organizations_url: "https://api.github.com/users/mojombo/orgs",
      repos_url: "https://api.github.com/users/mojombo/repos",
      events_url: "https://api.github.com/users/mojombo/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mojombo/received_events",
      type: "User",
      site_admin: false,
    },
  ],
};

function setupFetchStub(data: {}) {
  return function fetchStub() {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      });
    });
  };
}
global.fetch = jest.fn().mockImplementation(setupFetchStub(mockdata));

it("getUsers", async () => {
  const apiWrapper = new ApiWrapper();

  var data = await apiWrapper.GetUsers();
  expect(fetch).toHaveBeenCalledTimes(1);

  expect(data.data.users[0].id).toEqual(1);
});
