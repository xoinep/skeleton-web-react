import { Typography, Row, Col, Space, List, Divider } from "antd";
import { useStoreState, useStoreActions } from "easy-peasy";

const DownloadResultScreen = ({ showResult }) => {
  const urls = useStoreState((state) => state.model.urls);
  console.log(showResult);
  if (showResult) {
    return (
      <>
        <Divider orientation="left">Available videos to download</Divider>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 6,
            xxl: 2,
          }}
          dataSource={urls}
          renderItem={(item) => (
            <List.Item>
              <video controls>
                <source src={item} type="video/mp4" />
              </video>
            </List.Item>
          )}
        />
      </>
    );
  } else {
    return null;
  }
};

export default DownloadResultScreen;
