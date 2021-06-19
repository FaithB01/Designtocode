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
          <ActivitItems />
        </div>
      </article>
    </>
  );
}

export default Activity;

