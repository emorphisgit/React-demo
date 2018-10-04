import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../hoc/Layout/Layout';
import Detail from '../../components/UI/Detail/Detail';
import axios from 'axios'
import '../../frontend-challenge-pattern-library/src/assets/toolkit/styles/toolkit.scss';

import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class Browse extends Component {

  state = {
    query: ''
  }
    componentDidMount () {
        this.props.onInitDetail();
    }
  
  submitHandler = () => {
    this.setState({
      query: this.search.value
    }, () => {
          this.props.onGetInfo('http://exygy-challenge-backend.herokuapp.com/documents?search='+this.state.query+'&api_key=123')
    })
  }

  onClickHandler = () => {
    this.search.value = '';
    this.setState({
      query: this.search.value
    }, () => {
          this.props.onGetInfo('http://exygy-challenge-backend.herokuapp.com/documents?search='+this.state.query+'&api_key=123')
    })
  }



    render () {
        // let persons = this.props.error ? <p>Details can't be loaded!</p> : <Spinner />;
        let kids = null;
        if ( this.props.success ) {
          kids = (
            <div>
              {this.props.persons.map((person, index) => {
                console.log('*****************************'+JSON.stringify(person)+'$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
                return <Detail
                  key={person.id} 
                  name={person.name}
                  title={person.title}
                  modifiedBy={person.modified_by}
                  lastModified={person.updated_at}
                  status={person.status}
                  country={person.country}
                  documentType={person.document_type}
                  />
              })}
            </div>
          );
        }

        return (
          <div>
          <Layout />
          <div class="page" data-page="browse">
            <div class="layout-content">
              <div class="layout-main">
                <div class="browse-search">
                  <div class="search-box-container">
                    <span class="ui-icon i-darker-gray i-base search-box-search-icon">
                      <svg>
                        <use xlinkHref="#i-search" />
                      </svg>
                    </span>  
                    <input onChange={(e) => {this.submitHandler(e)}} ref={input => this.search = input} type="text" id="textInput" class="search-box " placeholder="" />
                    <span onClick={() => this.onClickHandler()} class="ui-icon i-medium-gray i-base search-box-close-icon">
                      <svg>
                        <use xlinkHref="#i-close-large" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="browse-stage">
                <div class="browse-slat-set">
                {kids}
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        );
    }
}

const mapStateToProps = state => {
  console.log(JSON.stringify(state));
    return {
         persons: state.browse.persons,
         success: state.browse.success
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitDetail: () => dispatch(actions.initDetail()),
        onGetInfo: (url) => dispatch(actions.getInfo(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( Browse );












