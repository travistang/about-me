import React from "react"
import * as styles from "./index.module.scss"
import PropTypes from "prop-types"
import { DateTime } from "luxon"
import classnames from "classnames"

/**
 *  Two formatting functions
 */
const stringToDate = str => DateTime.fromFormat(str, "M/yyyy")
const formatDate = date => stringToDate(date).toFormat("MMM yyyy")
const formatDuration = (startDate, endDate) => {
  // end date may or may not be there; if its not then use the first day of the month
  const duration = (endDate
    ? stringToDate(endDate)
    : DateTime.local().startOf("months")
  )
    .diff(stringToDate(startDate))
    // make sure the object has years and months
    .shiftTo("years", "months")
    .toObject()
  return (
    Object.entries(duration)
      // after this it will be ["1 years", "2 months", "3 days", null, null...]
      .map(([durationName, dur]) =>
        dur >= 1
          ? `${Math.round(dur)} ${
              // drop the last s (if its there) if dur === 1
              dur > 1 ? durationName : durationName.replace(/s$/, "")
            }`
          : null
      )
      // drop all nulls
      .filter(str => !!str)
      // join them like "1 years, 2 months, 3 days,..."
      .join(", ")
  )
}

const TimelineStroke = () => (
  <div className={styles.timeline}>
    <div className={styles.timelineStroke} />
  </div>
)
const Timeline = ({ events, right }) => {
  return (
    <div className={styles.timelineContainer}>
      {events.map((evt, i) => (
        <div
          key={i}
          className={classnames(styles.eventItem, right && styles.right)}
        >
          <div className={styles.checkpointContainer}>
            {/* the dot as well as the date */}

            <div className={styles.checkpoint} />
            {`${formatDate(evt.startDate)} - ${
              evt.endDate ? formatDate(evt.endDate) : "current"
            } (${formatDuration(evt.startDate, evt.endDate)})`}
          </div>
          {/* the stroke | as well as the content */}
          <div className={styles.timelineStrokeWithContent}>
            <TimelineStroke />
            <div className={styles.content}>
              <div className={styles.title}>{evt.title}</div>
              <div className={styles.subtitle}>{evt.subtitle}</div>
              <div className={styles.description}>{evt.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

Timeline.propTypes = {
  events: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
  }).isRequired,
  right: PropTypes.bool,
}

export default Timeline
