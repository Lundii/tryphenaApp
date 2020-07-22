import React, {createContext, useState, useEffect, useCallback} from 'react';
import {useFetcher} from '../hooks';

export const SiteContext = createContext();

export const SiteProvider = ({children}) => {
  const [state, setState] = useState({
    siteid: null,
    siteDetails: null,
  });
  const {data, request, error, isLoading} = useFetcher();

  const setSiteId = useCallback(newid => {
    setState(prevState => ({
      ...prevState,
      siteid: newid,
    }));
  }, []);

  const refreshData = useCallback(async () => {
    const site = await request(
      `https://tryphena-staging.herokuapp.com/dash/site/${state.siteid}`,
    );
    setState(prevState => ({
      ...prevState,
      siteDetails: site,
    }));
  }, [request, state.siteid]);

  useEffect(() => {
    async function getSite() {
      const site = await request(
        `https://tryphena-staging.herokuapp.com/dash/site/${state.siteid}`,
      );
      setState(prevState => ({
        ...prevState,
        siteDetails: site,
      }));
    }
    if (state.siteid) {
      getSite();
    }
  }, [request, state.siteid]);

  return (
    <SiteContext.Provider
      value={{
        setSiteId,
        refreshData,
        siteid: state.siteid,
        siteDetails: state.siteDetails,
      }}>
      {children}
    </SiteContext.Provider>
  );
};
