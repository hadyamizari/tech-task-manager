import {FlatList, SafeAreaView, StyleSheet, View, TextInput} from 'react-native'
import {useTheme, Text, MD3Theme, Surface, Divider, Chip} from 'react-native-paper'
import {rem} from '@/constants/remUtils'
import {Loader, Star, TriangleAlert} from 'lucide-react-native'
import {useState} from 'react'

const complaints = [
  {
    id: 'C001',
    category: 'Product Issue',
    description: 'Received a damaged product.',
    severity: 'Critical',
    attachments: [
      {type: 'photo', url: 'https://example.com/photo1.jpg'},
      {type: 'invoice', url: 'https://example.com/invoice1.pdf'}
    ],
    status: 'In Progress', // Possible statuses: Submitted, In Progress, Resolved, Closed
    submittedDate: '2025-01-20',
    lastUpdated: '2025-01-22',
    resolutionDetails: null, // Updated when resolved
    clientFeedback: 5 // Feedback after resolution
  },
  {
    id: 'C002',
    category: 'Service Issue',
    description: 'Technician arrived late for installation.',
    severity: 'Medium',
    attachments: [{type: 'video', url: 'https://example.com/video1.mp4'}],
    status: 'Resolved',
    submittedDate: '2025-01-18',
    lastUpdated: '2025-01-21',
    resolutionDetails: {
      resolvedBy: 'John Doe',
      actionsTaken: 'Offered a 10% discount on the next service.',
      resolvedDate: '2025-01-21'
    },
    clientFeedback: 2
  },
  {
    id: 'C003',
    category: 'Product Issue',
    description: 'Wrong product delivered.',
    severity: 'Low',
    attachments: [],
    status: 'Submitted',
    submittedDate: '2025-01-23',
    lastUpdated: '2025-01-23',
    resolutionDetails: null,
    clientFeedback: 1
  },
  {
    id: 'C004',
    category: 'Service Issue',
    description: 'Billing discrepancy in the last invoice.',
    severity: 'Critical',
    attachments: [{type: 'invoice', url: 'https://example.com/invoice2.pdf'}],
    status: 'Closed',
    submittedDate: '2025-01-15',
    lastUpdated: '2025-01-20',
    resolutionDetails: {
      resolvedBy: 'Jane Smith',
      actionsTaken: 'Corrected the invoice and refunded the excess amount.',
      resolvedDate: '2025-01-18'
    },
    clientFeedback: 5
  }
]

const WorkOrders = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Search for a title or status'}
          placeholderTextColor={theme.colors.outlineVariant}
          // value={title}
          // onChangeText={(text) => setTitle(text)}
        />
      </View>
      <FlatList
        data={complaints}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          const severityColor = item.severity === 'Critical' ? '#FFCCCC' : item.severity === 'Medium' ? '#FFD9B3' : item.severity === 'Low' ? '#DFFFCC' : '#F0F0F0' // Default light gray for unknown severity
          const stars = new Array(item.clientFeedback).fill(null)

          return (
            <Surface style={styles.surface}>
              {/* <TouchableOpacity key={1} onPress={() => router.push('/complaintDetails')}> */}
              <View style={styles.header}>
                <Text style={styles.title}>
                  {item.id}: {item.category}
                </Text>
                {item.clientFeedback && (
                  <View style={{flexDirection: 'row', gap: 5}}>
                    {stars.map((_, index) => (
                      <Star key={index} color={'#FFD700'} fill={'#FFD700'} size={18} />
                    ))}
                  </View>
                )}
              </View>

              <Divider />

              <Text variant='labelMedium' style={{color: theme.colors.outline}}>
                {item.description}
              </Text>
              <View style={{flexDirection: 'row', gap: 15, marginVertical: 5}}>
                <Chip style={{flexGrow: 1, backgroundColor: severityColor}}>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <TriangleAlert size={15} color={theme.colors.outline} />
                    <Text variant='labelMedium'>{item.severity}</Text>
                  </View>
                </Chip>
                <Chip style={{flexGrow: 1, backgroundColor: theme.colors.elevation.level1}}>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <Loader size={15} color={theme.colors.outline} />
                    <Text variant='labelMedium'>{item.status}</Text>
                  </View>
                </Chip>
              </View>
              {/* </TouchableOpacity> */}
            </Surface>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default WorkOrders

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: 15, gap: 15},
    surface: {backgroundColor: 'white', gap: 5, paddingHorizontal: rem(17), padding: rem(15), borderRadius: 15, margin: 5},

    card: {
      backgroundColor: '#fff',
      margin: 10,
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5
    },
    header: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5},

    title: {fontSize: 16, fontWeight: '500'},

    subHeader: {
      fontSize: 16,
      fontWeight: '600',
      marginTop: 10
    },
    attachmentText: {
      color: 'blue',
      textDecorationLine: 'underline'
    },

    inputContainer: {
      borderWidth: 0.5,
      borderColor: 'white',
      paddingRight: rem(15),
      borderRadius: 15,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
      // shadowOffset: {width: 2, height: 2},
      // shadowOpacity: 0.1
    },

    input: {padding: rem(12), fontSize: 14, flexGrow: 1, color: theme.colors.outline}
  })

{
  /* <Timeline
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
  /> */
}
