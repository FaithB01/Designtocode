import React from 'react';
import ActivitItems from './ActivitItems';


const Activity = () => {
  return (
    <>
      <article className="story-quarter ">
        <div className="act">
          <h4 className="activity-feed ">Activity</h4>
        </div>
        <div>
          <ActivitItems project="Workcation" commit="2d89f0c8" environment="production" time="1h" />
          <ActivitItems project="KiteTail" commit="249df660" environment="staging" time="3h" />
          <ActivitItems project="Workcation" commit="11464223" environment="staging" time="12h" />
          <ActivitItems project="Easywire" commit="dad28e95" environment="production" time="2d" />
          <ActivitItems project="Easywire" commit="624bc94c" environment="production" time="5d" />
          <ActivitItems project="Workcation" commit="e111f80e" environment="production" time="1w" />
          <ActivitItems project="Resumaid" commit="5e136005" environment="staging" time="1w" />
          <ActivitItems project="KiteTail" commit="5c1fd07f" environment="production" time="2w" />

        </div>
      </article>
    </>
  );
}

export default Activity;

