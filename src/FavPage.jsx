import React from "react";
import { Store } from "./Store";
import * as actions from "./Actions";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default () => {
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
  const props = {
    episodes: state.favourites,
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  );
};
