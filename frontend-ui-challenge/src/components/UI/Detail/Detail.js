import React from 'react';


const detail = ( props ) => {
    return (
       
                  <div href="#" class="slat row align-middle collapse  excel" data-ref="">
                    <div class="slat-avatar item-avatar">
                      {props.documentType === 'excel' && 
                      <span class="ui-icon i-excel i-xlarge ">
                        <svg>
                          <use xlinkHref="#i-file-excel" />
                        </svg>
                      </span>}
                      {props.documentType === 'word' && 
                      <span class="ui-icon i-word i-xlarge ">
                        <svg>
                          <use xlinkHref="#i-file-word" />
                        </svg>
                      </span>}
                      {props.documentType === 'pdf' && 
                      <span class="ui-icon i-pdf i-xlarge ">
                        <svg>
                          <use xlinkHref="#i-file-pdf" />
                        </svg>
                      </span>}
                    </div>
                    <div class="slat-body expand columns">
                      <div class="rows">
                        <div class="columns small-12">
                          <h3 class="slat-header">{props.name}</h3>
                        </div>
                      </div>
                      <div class="row slat-subtitle">
                        <div class="columns small-12">
                          <p class="slat-title-wrapper">
                            <span class="slat-subtitle-prefix">Title:</span>
                            <span class="slat-subtitle-text">{props.title}</span>
                          </p>
                        </div>
                      </div>
                      <div class="row show-for-medium">
                        <div class="columns small-12 medium-6">
                          <p class="slat-attr-wrapper">
                            <span class="slat-attr-key">Modified By:</span>
                            <span class="slat-attr-value">{props.modifiedBy}</span>
                          </p>
                          <p class="slat-attr-wrapper">
                            <span class="slat-attr-key">Last Modified:</span>
                            <span class="slat-attr-value">{props.lastModified}</span>
                          </p>
                        </div>
                        <div class="columns small-12 medium-6">
                          <p class="slat-attr-wrapper">
                            <span class="slat-attr-key">Status:</span>
                            <span class="slat-attr-value">{props.status}</span>
                          </p>
                          <p class="slat-attr-wrapper">
                            <span class="slat-attr-key">Country:</span>
                            <span class="slat-attr-value">{props.country}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="slat-secondary columns shrink">
                      <span class="ui-icon i-darker-gray i-sm-medium slat-secondary-icon">
                        <svg>
                          <use xlinkHref="#i-star" />
                        </svg>
                      </span>
                      <span class="float-right slat-dropdown">
                        <span class="ui-icon i-darker-gray i-sm-medium slat-secondary-more">
                          <svg>
                            <use xlinkHref="#i-more-vert" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
    )
};

export default detail;









