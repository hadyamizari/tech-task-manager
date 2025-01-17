import {Tabs} from 'expo-router'
import React from 'react'
import {Platform} from 'react-native'

import {HapticTab} from '@/components/HapticTab'
import {IconSymbol} from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import {Colors} from '@/constants/Colors'
import {useColorScheme} from '@/hooks/useColorScheme'
import {NotebookPen, MessageCircleWarning, FileCheck, Home} from 'lucide-react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()
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
          headerTitle: 'Tech Task Manager',
          title: 'Home',
          tabBarIcon: ({color}) => <Home size={26} color={color} />
        }}
      />
      <Tabs.Screen
        name='workOrders'
        options={{
          tabBarLabelStyle: tabBarLabelStyle,
          title: 'Work Orders',
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
      <Tabs.Screen
        name='assignedWorkOrders'
        options={{
          tabBarLabelStyle: tabBarLabelStyle,
          title: 'Assigned Orders',
          tabBarIcon: ({color}) => <FileCheck size={26} color={color} />
        }}
      />
    </Tabs>
  )
}
