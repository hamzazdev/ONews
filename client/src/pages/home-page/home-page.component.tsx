import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectNewsArticles } from "../../redux/news/news.selectors";

import { fetchNewsStartAsync } from "../../redux/news/news.actions";
import {
  setUserCategory,
  setUserCountry,
  setUserSidebarMenu,
  setUserWeatherMenu,
} from "../../redux/user/user.actions";
import { AppActions } from "../../redux/store";

import { ThunkDispatch } from "redux-thunk";

import { News } from "../../redux/news/news.types";

import Article from "../../components/article/article.component";

import "./home-page.styles.scss";
import PageContainer from "../../components/page-container/page-container.component";

interface HomePageProps {
  match: {
    params: {
      category: string;
      country: string;
    };
  };
}

type Props = HomePageProps & LinkDispatchProps & LinkStateProps;

class HomePage extends React.Component<Props> {
  componentDidMount() {
    const {
      category: newsCategory,
      country: newsCountry,
    } = this.props.match.params;

    const { fetchNewsStartAsync, setUserCategory, setUserCountry } = this.props;

    fetchNewsStartAsync(newsCountry, newsCategory);
    setUserCategory(newsCategory);
    setUserCountry(newsCountry);

    const { setUserSidebarMenu, setUserWeatherMenu } = this.props;

    if (window.innerWidth <= 1000) {
      setUserSidebarMenu(false);
    } else {
      setUserSidebarMenu(true);
    }

    if (window.innerWidth <= 800) {
      setUserWeatherMenu(false);
    } else {
      setUserWeatherMenu(true);
    }
  }

  // Checks if the component received new props and refetches data
  componentDidUpdate(prevProps: Props) {
    const {
      category: newsCategory,
      country: newsCountry,
    } = this.props.match.params;

    const { fetchNewsStartAsync, setUserCategory, setUserCountry } = this.props;

    if (
      newsCountry !== prevProps.match.params.country &&
      newsCategory !== prevProps.match.params.category
    ) {
      fetchNewsStartAsync(newsCountry, newsCategory);
      setUserCategory(newsCategory);
      setUserCountry(newsCountry);
    } else if (newsCountry !== prevProps.match.params.country) {
      fetchNewsStartAsync(newsCountry, newsCategory);
      setUserCountry(newsCountry);
    } else if (newsCategory !== prevProps.match.params.category) {
      fetchNewsStartAsync(newsCountry, newsCategory);
      setUserCategory(newsCategory);
    }
  }

  // Handles the subheader text for all the news categories
  handleSubheader = (category: string) => {
    switch (category) {
      case "general":
        return "View the latest news and top headlines!";
      case "business":
        return "Latest headlines for business news around the world!";
      case "technology":
        return "Keep up to date on the latest developments in the tech industry!";
      case "entertainment":
        return "Get the latest news on celebrity scandals, engagements, and divorces!";
      case "science":
        return "The world's leading outlet for cutting-edge research in all areas of science!";
      case "sports":
        return "Keeping you up to date on the latest sports news from Romania and the World!";
      case "health":
        return "View the latest health news and explore articles on fitness, diet, nutrition and healthy living!";

      default:
        return "View the latest news and top headlines!";
    }
  };

  render(): JSX.Element {
    const { newsArticles } = this.props;
    const {
      category: newsCategory,
      country: newsCountry,
    } = this.props.match.params;

    const subHeader = this.handleSubheader(newsCategory);

    return (
      <PageContainer className="homepage">
        <h2 className="homepage__header">
          {newsCategory === "general"
            ? "Top stories"
            : `${
                newsCategory.slice(0, 1).toUpperCase() + newsCategory.slice(1)
              } news`}
        </h2>
        <h4 className="homepage__sub-header">{subHeader}</h4>

        <div className="homepage__articles">
          {newsArticles.map((x: News, i: number) => (
            <Article
              key={`${i + newsCountry + newsCategory}`}
              {...x}
              id={`${i + newsCountry + newsCategory}`}
            />
          ))}
        </div>
      </PageContainer>
    );
  }
}

interface LinkStateProps {
  newsArticles: News[];
}

interface LinkDispatchProps {
  fetchNewsStartAsync: (country: string, category: string) => void;
  setUserCategory: (category: string) => void;
  setUserCountry: (country: string) => void;

  setUserSidebarMenu: (bool: boolean) => void;
  setUserWeatherMenu: (bool: boolean) => void;
}

const mapStateToProps = createStructuredSelector({
  newsArticles: selectNewsArticles,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  fetchNewsStartAsync: (country, category) =>
    dispatch(fetchNewsStartAsync(country, category)),

  setUserCategory: (category) => dispatch(setUserCategory(category)),
  setUserCountry: (country) => dispatch(setUserCountry(country)),

  setUserSidebarMenu: (bool) => dispatch(setUserSidebarMenu(bool)),
  setUserWeatherMenu: (bool) => dispatch(setUserWeatherMenu(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
