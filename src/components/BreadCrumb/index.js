import React from "react"
import { Link } from "gatsby"
import { BreadCrumbContainer } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) => (
  <BreadCrumbContainer>
    {console.log(parent)}
    <Link to="/">
      <span>Home</span>
    </Link>
    <span className="divider">/</span>
    {parent ? (
      <>
        <Link to={parent.uri}>
          <span dangerouslySetInnerHTML={{ __html: parent.title }} />
        </Link>
        <span className="divider">/</span>
      </>
    ) : null}
  </BreadCrumbContainer>
)

export default BreadCrumb
