import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSubjects, deleteSubjects } from "../../actions/subjects";
import Subjectform from "./Subjectform";

class Subject extends Component {
  static propTypes = {
    subjects: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getSubjects();
  }

  render() {
    return (
      <Fragment>
        <Subjectform />
        <h1>Subject List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Faculty</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {this.props.subjects.map((subject) => (
              <tr key={subject.id}>
                <td>{subject.subject_code}</td>
                <td>{subject.name}</td>
                <td>{subject.faculty_name}</td>
                <td>{subject.semester_name}</td>
                <td>
                  <button
                    onClick={this.props.deleteSubjects.bind(this, subject.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  subjects: state.subjects.subjects,
});

export default connect(mapStateToProps, { getSubjects, deleteSubjects })(
  Subject
);
