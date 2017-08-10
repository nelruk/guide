/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
};

function Article(props) {
  const article = props.data.markdownRemark;
  const { html, frontmatter: { title } } = article;
  return (
    <div>
      <Helmet>
        <title>{ `${title} | freeCodeCamp Guide` }</title>
        <link
          href={ `https://freecodecamp.org/guide${props.location.pathname}` }
          rel='canonical'
        />
      </Helmet>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

Article.displayName = 'Article';
Article.propTypes = propTypes;

export default Article;

export const pageQuery = graphql`
query ArticleBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
    }
  }
}
`;
