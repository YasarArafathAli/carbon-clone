import { Breadcrumb, Dropdown, } from 'antd'
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import React, { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom';

type RouteItemType = {
  className?: string;
  dropdownProps?: typeof Dropdown;
  onClick?: MouseEventHandler;
  title: ReactNode;
}

type RouteParams =
  {
    path: string,
    breadcrumbName: string
  }

type BreadCrumbProps = {
  routes?: RouteItemType[]
  params: RouteParams[]
  separator?: ReactNode
}


const itemRender = (route: Route, params: any, routes: Route[], paths: string[]) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}



const BreadCrumb = ({ routes, params,separator='/' }: BreadCrumbProps) => {
  return (
    <div>
       {routes? <Breadcrumb  separator={separator}>
 {routes.map((item,index) => <Breadcrumb.Item className={item.className} key={index} onClick={item.onClick}>
              {item.title}
          </Breadcrumb.Item> )}

  </Breadcrumb>:
      <Breadcrumb routes={params}  separator={separator} itemRender={itemRender}/>}
    </div>
  )
}

export default BreadCrumb