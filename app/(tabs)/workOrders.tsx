import {SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import {useTheme, Text, FAB, MD3Theme} from 'react-native-paper'
import {rem} from '@/constants/remUtils'

const WorkOrders = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  return (
    <SafeAreaView style={styles.container}>
      <Text variant='labelLarge' style={styles.title}>
        WORK ORDERS
      </Text>
    </SafeAreaView>
  )
}

export default WorkOrders

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 10
    },
    title: {color: theme.colors.outline, fontWeight: '400', marginTop: rem(15)}
  })
