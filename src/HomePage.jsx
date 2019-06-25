import React from "react";
import { Store } from "./Store";
import * as actions from "./Actions";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  const toggleFavAction = episode => {
    const episodeInFavourites = state.favourites.includes(episode);
    let dispatchObj = actions.addFav(episode);

    if (episodeInFavourites) {
      const favouritesWithoutEpisode = state.favourites.filter(
        fav => fav.id !== episode.id
      );
      dispatchObj = actions.removeFav(favouritesWithoutEpisode);
    }
    return dispatch(dispatchObj);
  };

  const fetchDataAction = async () => {
    const data = await fetch(
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    );
    const dataJSON = await data.json();
    const dispatchObj = actions.fetchData(dataJSON._embedded.episodes);
    return dispatch(dispatchObj);
  };

  const props = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  };

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
