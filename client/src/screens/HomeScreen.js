import React, { useState } from "react";
import {
  Layout,
  Menu,
  Space,
  Spin,
  Image,
  Input,
  Button,
  Typography,
} from "antd";
import { useStoreState, useStoreActions } from "easy-peasy";
import Introduction from "./IntroductionScreen";
import DownloadResultScreen from "./DownloadResultScreen";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const HomeScreen = () => {
  const loading = useStoreState((state) => state.model.loading);
  const getPageSource = useStoreActions(
    (actions) => actions.model.getPageSource
  );
  const [showResult, setShowResult] = useState(false);
  const onSearch = (value) => {
    setShowResult(true);
    getPageSource({ url: value });
  };
  return (
    <Spin spinning={loading}>
      <Layout>
        <Space direction="vertical">
          <Header style={{ display: "flex", justifyContent: "flex-end" }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Contact Us</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={"15%"} theme="light">
              <Image src="https://longmaba-demo-bucket.s3-us-west-1.amazonaws.com/getfb.video/Yellow+and+Orange+Rectangles+Modern+Swiss+Business+Retractable+Exhibition+Banner.png" />
            </Sider>
            <Content>
              <Introduction></Introduction>
              <br />
              <div>
                <Search
                  placeholder="Input facebook video url"
                  allowClear
                  onSearch={onSearch}
                  style={{ width: "90%" }}
                  disabled={showResult}
                />
              </div>
              <div>
                <DownloadResultScreen
                  showResult={showResult}
                ></DownloadResultScreen>
              </div>
            </Content>
            <Sider width={"15%"} theme="light">
              <Image src="https://longmaba-demo-bucket.s3-us-west-1.amazonaws.com/getfb.video/Yellow+and+Orange+Rectangles+Modern+Swiss+Business+Retractable+Exhibition+Banner.png" />
            </Sider>
          </Layout>

          <Footer>
            {(() => {
              if (showResult) {
                return (
                  <Button
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Download More
                  </Button>
                );
              } else {
                return null;
              }
            })()}
          </Footer>
        </Space>
      </Layout>
    </Spin>
  );
};

export default HomeScreen;
