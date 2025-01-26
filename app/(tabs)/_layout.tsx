import {router, Tabs} from 'expo-router'
import React from 'react'
import {Platform, TouchableOpacity, View, StyleSheet} from 'react-native'

import {HapticTab} from '@/components/HapticTab'
import {IconSymbol} from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import {Colors} from '@/constants/Colors'
import {useColorScheme} from '@/hooks/useColorScheme'
import {NotebookPen, MessageCircleWarning, FileCheck, Home, Frown, Filter} from 'lucide-react-native'
import {MD3Theme, useTheme} from 'react-native-paper'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const theme = useTheme()
  const styles = createStyles(theme)
  const tabBarLabelStyle = {marginTop: 5, fontSize: 12}

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute'
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabelStyle: tabBarLabelStyle,
          headerTitle: 'Complaints',
          // headerRight: () => (
          //   <View style={{}}>
          //     <TouchableOpacity
          //       style={styles.homeAccessibilityIcons}
          //       //  onPress={() => router.push('/account')}
          //     >
          //       <Filter size={16} color={theme.colors.primary} />
          //     </TouchableOpacity>
          //   </View>
          // ),
          title: 'Complaints',
          tabBarIcon: ({color}) => <Frown size={26} color={color} />
        }}
      />
      <Tabs.Screen
        name='workOrders'
        options={{
          tabBarLabelStyle: tabBarLabelStyle,
          title: 'Orders',
          tabBarIcon: ({color}) => <NotebookPen size={26} color={color} />
        }}
      />
      <Tabs.Screen
        name='issuesReport'
        options={{
          tabBarLabelStyle: tabBarLabelStyle,
          title: 'Issues Report',
          tabBarIcon: ({color}) => <MessageCircleWarning size={26} color={color} />
        }}
      />
    </Tabs>
  )
}

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    homeAccessibilityIcons: {
      marginHorizontal: 5,
      backgroundColor: 'white',
      right: 10,
      padding: 8,
      paddingHorizontal: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 3
    }
  })
