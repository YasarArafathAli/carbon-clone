import { TabPaneProps, Tabs } from 'antd';
import React, { ReactElement } from 'react'
import "./styles.scss";
type Props = {
  handleTabChange: (key: string) => void;
  activeKey: string;
  tabItems: TabPaneProps[];
  extraContent?: ReactElement;
}

const { TabPane } = Tabs;


const AppTabs = ({handleTabChange, activeKey, tabItems, extraContent}: Props) => {
  return (
    <div className='tabs-wrapper'>
      <Tabs onChange={handleTabChange} activeKey={activeKey} tabBarExtraContent={extraContent}>
    {tabItems.map(item => <TabPane  key={item.id} tab={item.tab}>{item.children}</TabPane>)}
    </Tabs> 
      </div>
  )
}

export default AppTabs