import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { Swipeable, RectButton } from 'react-native-gesture-handler'
import SwipeableImage from './SwipeableImage'

const Swipes = ({ users, currentIndex, handleLike, handlePass, swipesRef }) => {

  const [willLike, setWillLike] = useState(false)
  const [willPass, setWillPass] = useState(false)

  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]} />
      </RectButton>
    )
  }
  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]} />
      </RectButton>
    )
  }

  return (
    <Swipeable
      ref={swipesRef}
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        setWillLike(false)
        handleLike()
      }}
      onSwipeableRightOpen={() => {
        setWillPass(false)
        handlePass()
      }}
      onSwipeableLeftWillOpen={() => setWillLike((true))}
      onSwipeableRighWilltOpen={() => setWillPass((true))}
    >
      <SwipeableImage user={users[currentIndex]} willLike={willLike} willPass={willPass} />
    </Swipeable>
  )
}

export default Swipes

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
