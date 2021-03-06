import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNotices, deleteNotice } from "../../actions/notices";
import { getUserProfile } from "../../actions/auth";

import {
  Feed,
  Icon,
  Header,
  Container,
  Button,
  Segment,
} from "semantic-ui-react";
import NoticeForm from "./NoticeForm";

class Notices extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    notices: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getNotices();
  }

  render() {
    const { user } = this.props.auth;

    return (
      <Fragment>
        <Container text>
          {user.is_admin ? <NoticeForm /> : null}
          <Header>College Notice Board</Header>
          {this.props.notices.map((notice) => (
            <Segment key={notice.id}>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      <a
                        href={"#/userprofile/" + notice.notice_owner}
                        onClick={this.props.getUserProfile.bind(
                          this,
                          notice.notice_owner
                        )}
                      >
                        {notice.notice_owner}
                      </a>{" "}
                      has posted notice
                      <Feed.Date>
                        Date Published: {notice.date_published}
                      </Feed.Date>
                      <Feed.Date>Date Updated: {notice.date_updated}</Feed.Date>
                    </Feed.Summary>
                    {/* <Feed.Extra text>{notice.text}</Feed.Extra> */}
                    <p>{notice.text}</p>
                    {/* <Feed.Extra>{notice.file}</Feed.Extra> */}
                    {notice.file ? (
                      <Feed.Extra images>
                        <img src={notice.file} alt="asdas" />
                      </Feed.Extra>
                    ) : (
                      ""
                    )}
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like" />
                        {notice.likes}
                      </Feed.Like>
                    </Feed.Meta>
                    <Button
                      onClick={this.props.deleteNotice.bind(this, notice.id)}
                      content="Delete Notice"
                      labelPosition="left"
                      icon="delete"
                      primary
                    />
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Segment>
          ))}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  // console.log(state)
  auth: state.auth,
  notices: state.notices.notices,
});

export default connect(mapStateToProps, {
  getNotices,
  deleteNotice,
  getUserProfile,
})(Notices);
