import reselect = require('reselect');
import {Region} from '../reducers/region';
import {authorizedRegionsSelector} from './authorizedRegions';

export const matchingRegionsSelector = reselect.createSelector(
  [authorizedRegionsSelector, state => state.regions.filter],
  (regions: Region[], filter) => {
    return filter
      ? regions
      : _.filter(regions, (r: Region) => { return r.name.toLowerCase().indexOf(filter.toLowerCase()) > -1; });
  });

