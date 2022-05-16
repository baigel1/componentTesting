import { useLayoutEffect } from "react";
import { useAnswersActions } from "@yext/answers-headless-react";

/**
 * Sets up the state for a page
 * @param verticalKey - The verticalKey associated with the page, or undefined for universal pages
 */
 export default function usePageSetupEffect(verticalKey?: string) {
    const answersActions = useAnswersActions();
    useLayoutEffect(() => {
      const stateToClear = {
        filters: {},
        universal: {},
        vertical: {}
      }
      answersActions.setState({
        ...answersActions.state,
        ...stateToClear
      });
      verticalKey
        ? answersActions.setVertical(verticalKey)
        : answersActions.setUniversal();
    //   const executeQuery = async () => {
    //     let searchIntents: SearchIntent[] = [];
    //     // if (!answersActions.state.location.userLocation) {
    //     //   searchIntents = await getSearchIntents(answersActions, !!verticalKey) || [];
    //     //   await updateLocationIfNeeded(answersActions, searchIntents);
    //     // }
    //     executeSearch(answersActions, !!verticalKey); //comment out for removing default initital search
    //   };
    //   executeQuery();
    }, [answersActions, verticalKey]);
  }