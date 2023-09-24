import { component$ } from "@builder.io/qwik";
import { IClass } from "../../util";
import { Octokit } from "github-api";

export const GHButton = component$((props: IClass) => {
  const username = "your_username";
  const repoName = "your_repository";
  const accessToken = "your_access_token";

  // Create an instance of Octokit with authentication
  const octokit = new Octokit({
    auth: accessToken,
  });
  return (
    <div class="gh-button">
      <button class={props.class}></button>
    </div>
  );
});
