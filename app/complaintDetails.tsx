import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native'
import {useTheme, Text, MD3Theme, Divider} from 'react-native-paper'

const ComplaintDetails = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  const complaint = {
    id: 'C001',
    category: 'Product Issue',
    description: 'Received a damaged product.',
    severity: 'Critical',
    attachments: [
      {type: 'photo', url: 'https://example.com/photo1.jpg'},
      {type: 'invoice', url: 'https://example.com/invoice1.pdf'}
    ],
    status: 'In Progress',
    submittedDate: '2025-01-20',
    lastUpdated: '2025-01-22',
    resolutionDetails: {
      resolvedBy: 'John Doe',
      actionsTaken: 'Offered a 10% discount',
      resolvedDate: '2025-01-21'
    },
    clientFeedback: 'Satisfied'
  }

  const renderAttachments = () =>
    complaint.attachments.map((attachment, index) => (
      <TouchableOpacity key={index} onPress={() => console.log(`Opening ${attachment.type}: ${attachment.url}`)} style={styles.attachmentButton}>
        <Text style={styles.attachmentText}>
          {attachment.type.charAt(0).toUpperCase() + attachment.type.slice(1)}: {attachment.url}
        </Text>
      </TouchableOpacity>
    ))

  const KeyValuePair = ({label, value, isMultiline, valueStyle}) => (
    <View style={styles.row}>
      <Text variant='labelMedium' style={styles.key}>
        {label}
      </Text>
      <Text variant='labelMedium' style={[styles.value, isMultiline && styles.multilineValue, valueStyle]}>
        {value}
      </Text>
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <View style={{gap: 20}}>
        <View>
          <Text style={styles.subHeader}>Complaint Details:</Text>
          <View style={styles.detailsContainer}>
            <KeyValuePair label='ID' value={complaint.id} isMultiline={undefined} valueStyle={undefined} />

            <KeyValuePair label='Category' value={complaint.category} isMultiline={undefined} valueStyle={undefined} />

            <KeyValuePair label='Description' value={complaint.description} isMultiline={undefined} valueStyle={undefined} />

            <KeyValuePair label='Severity' value={complaint.severity} isMultiline={undefined} valueStyle={undefined} />

            <KeyValuePair label='Status' value={complaint.status} valueStyle={[styles.status, styles[complaint.status.toLowerCase().replace(' ', '')]]} isMultiline={undefined} />

            <KeyValuePair label='Submitted Date' value={complaint.submittedDate} isMultiline={undefined} valueStyle={undefined} />

            <KeyValuePair label='Last Updated' value={complaint.lastUpdated} isMultiline={undefined} valueStyle={undefined} />

            <KeyValuePair label='Client Feedback' value={complaint.clientFeedback || 'No feedback provided'} isMultiline={undefined} valueStyle={undefined} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>Attachments:</Text>
          {complaint.attachments.length > 0 ? renderAttachments() : <Text style={styles.value}>No attachments available</Text>}
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>Resolution Details:</Text>
          {complaint.resolutionDetails && (
            <View style={styles.detailsContainer}>
              <KeyValuePair label='Resolved By' value={complaint.resolutionDetails.resolvedBy} isMultiline={undefined} valueStyle={undefined} />

              <KeyValuePair label='Actions Taken' value={complaint.resolutionDetails.actionsTaken} isMultiline={undefined} valueStyle={undefined} />

              <KeyValuePair label='Resolved Date' value={complaint.resolutionDetails.resolvedDate} isMultiline={undefined} valueStyle={undefined} />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  )
}

export default ComplaintDetails

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: 15},

    detailsContainer: {
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 8,
      elevation: 2
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 7
    },
    key: {fontWeight: '600'},
    value: {fontWeight: '400'},
    multilineValue: {
      flex: 1,
      flexWrap: 'wrap'
    },
    status: {
      fontWeight: 'bold'
    },
    section: {
      marginTop: 20
    },
    subHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10
    },
    attachmentButton: {
      backgroundColor: '#ffffff',
      padding: 10,
      borderRadius: 5,
      marginBottom: 5
    },
    attachmentText: {
      color: '#007bff',
      textDecorationLine: 'underline'
    },
    inprogress: {
      color: '#ffc107'
    },
    resolved: {
      color: '#28a745'
    },
    closed: {
      color: '#dc3545'
    },
    submitted: {
      color: '#007bff'
    }
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
