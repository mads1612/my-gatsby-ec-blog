import { useStaticQuery, graphql } from "gatsby"

function useBuildTime() {
  const data = useStaticQuery(graphql`
    query siteInfo {
      site {
        buildTime(formatString: "MMM. DD, YYYY, h:mm a ")
      }
    }
  `)

  return data.site.buildTime
}

export default useBuildTime
