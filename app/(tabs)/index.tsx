import {SafeAreaView, StyleSheet, View} from 'react-native'
import React from 'react'
import {useTheme, Text, MD3Theme, Surface, Divider} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import Timeline from 'react-native-timeline-flatlist'

const Home = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  return (
    <SafeAreaView style={styles.container}>
      <Text variant='bodyLarge' style={styles.title}>
        Welcome Back, John Doe!
      </Text>

      <View>
        <Text variant='bodyMedium' style={styles.subtitle}>
          Last Work Orders
        </Text>
        <View style={styles.surface}>
          <Text variant='bodyMedium' style={{color: theme.colors.outline, fontWeight: '400'}}>
            12345 Saturday 18-01-2025
          </Text>
          <Divider style={{marginBottom: rem(15)}} />
          <Timeline
            titleStyle={{fontWeight: '400', fontSize: 13, marginBottom: 30}}
            data={[
              {
                title: 'WO001 Monday 20-01-2025'
              },
              {
                title: 'WO002 Saturday 15-02-2025'
              },
              {
                title: 'WO003 Monday 10-03-2025'
              }
            ]}
            innerCircle={'dot'}
            showTime={false}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: 15, gap: 20},
    title: {color: theme.colors.outline, fontWeight: '300', marginVertical: rem(5)},
    subtitle: {color: theme.colors.onBackground, fontWeight: '400', marginLeft: 10},
    surface: {backgroundColor: 'white', padding: rem(20), borderRadius: 15, marginTop: rem(5), gap: rem(10), height: 270}
  })
