import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ApiWrapper from "./ApiWrapper";
import { IUserData } from "./User";

export const getUser = async (name: string) => {
  try {
    const apiwrapper = new ApiWrapper();
    return await apiwrapper.GetUserByUserName(name);
  } catch (er) {
    return;
  }
};

const UserDetails = () => {
  const [state, setState] = useState<IUserData>({
    id: undefined,
    login: "test",
    avatar_url: "",
  });
  const username = useParams().username;
  useEffect(() => {
    getUser(username).then((res) =>
      setState({
        id: res.user.id,
        avatar_url: res.user.avatar_url,
        login: res.user.login,
      })
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5">
          <Link to="/">Home</Link>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h2>
                  Displaying Github profile details for{" "}
                  <span data-testid="resolved" className="text-primary">
                    {state.login}
                  </span>
                </h2>
                <dl>
                  <dt>{"Id:"}</dt>
                  <dd>
                    <span className="text-primary">{state.id}</span>
                  </dd>
                  <dt>{"Image:"}</dt>
                  <dd>
                    <a href={state.avatar_url}>url</a>
                  </dd>
                </dl>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
