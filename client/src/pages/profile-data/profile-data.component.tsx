import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ArticleSmall from '../../components/article-small/article-small.component';

import Article from '../../components/article/article.component';
import { News } from '../../redux/news/news.types';
import {
  selectUserDisliked,
  selectUserHidden,
  selectUserLiked,
  selectUserSaved,
  selectUserSearches,
} from '../../redux/user/user.selectors';

import './profile-data.styles.scss';

interface ProfileDataProps {
  match: {
    params: {
      type: string;
    };
  };
}

type Props = LinkStateProps & ProfileDataProps;

const ProfileData: React.FunctionComponent<Props> = ({
  match: {
    params: { type },
  },
  userSaved,
  userLiked,
  userDisliked,
  userHidden,
  userSearches,
}): JSX.Element => {
  let newsArticles =
    type === 'saved-stories'
      ? userSaved
      : type === 'liked-stories'
      ? userLiked
      : type === 'disliked-stories'
      ? userDisliked
      : [];

  let newsItems: [string] | [] =
    type === 'past-searches'
      ? userSearches
      : type === 'hidden-sources'
      ? userHidden
      : [];

  const subHeader =
    type === 'saved-stories' ||
    type === 'liked-stories' ||
    type === 'disliked-stories'
      ? `You can find here all the stories that you ${
          type.toLowerCase().split('-')[0]
        } in the past.`
      : type === 'past-searches'
      ? 'You can find here all your past news searches.'
      : type === 'hidden-sources'
      ? 'You can find here all the news sources that you hidden in the past.'
      : '';

  // console.log(type);
  // console.log(newsArticles);
  // console.log(userHidden);
  // console.log(newsItems);

  return (
    <div className='profile-data'>
      <div className='profile-data__content'>
        <h2 className='profile-data__content--header'>{`${
          type.slice(0, 1).toUpperCase() +
          type.slice(1).toLowerCase().replace('-', ' ')
        }`}</h2>
        <h4 className='profile-data__content--sub-header'>{subHeader}</h4>

        {newsArticles.length ? (
          <div className='profile-data__content--articles'>
            {newsArticles.map((x: News, i: number) => (
              <Article key={`${i + type}`} {...x} id={`${i + type}`} />
            ))}
          </div>
        ) : null}

        {newsItems.length ? (
          <div className='profile-data__content--articles'>
            {newsItems.map((x: string, i: number) => (
              <ArticleSmall
                key={`${i + type}`}
                name={x}
                type={type}
                id={`${i + type}`}
              />
            ))}
          </div>
        ) : null}

        {!newsArticles.length && !newsItems.length ? (
          <div className='profile-data__content--placeholder'>{`You have no ${type
            .toLowerCase()
            .replace('-', ' ')}!`}</div>
        ) : null}
      </div>
    </div>
  );
};

interface LinkStateProps {
  userSaved: News[];
  userLiked: News[];
  userDisliked: News[];
  userHidden: [string];
  userSearches: [string];
}

const mapStateToProps = createStructuredSelector({
  userSaved: selectUserSaved,
  userLiked: selectUserLiked,
  userDisliked: selectUserDisliked,
  userHidden: selectUserHidden,
  userSearches: selectUserSearches,
});

export default withRouter(connect(mapStateToProps)(ProfileData));