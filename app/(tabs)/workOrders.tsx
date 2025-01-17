import {SafeAreaView, StyleSheet, View} from 'react-native'
import {useTheme, Text, MD3Theme, Surface, Divider} from 'react-native-paper'
import {rem} from '@/constants/remUtils'

const data = [
  {
    asset: 'Generator A',
    maintenance: 'Quarterly Inspection',
    description: 'Test generator, clean filters, and check oil.'
  },
  {
    asset: 'HVAC Unit B',
    maintenance: 'Filter Replacement',
    description: 'Replace filters and check airflow.'
  },
  {
    asset: 'Pump C',
    maintenance: 'Lubrication',
    description: 'Lubricate parts and check for leaks.'
  },
  {
    asset: 'Conveyor D',
    maintenance: 'Belt Alignment',
    description: 'Check belt alignment and clear debris.'
  },
  {
    asset: 'Boiler E',
    maintenance: 'Annual Overhaul',
    description: 'Inspect system and descale boiler.'
  }
]

type dataItemType = {
  asset: string
  maintenance: string
  description: string
}

const WorkOrders = () => {
  const theme = useTheme()
  const styles = createStyles(theme)

  return (
    <SafeAreaView style={styles.container}>
      <Text variant='labelLarge' style={styles.title}>
        WORK ORDERS
      </Text>
      <View style={{gap: rem(15), marginTop: 20}}>
        {data.map((dataItem: dataItemType, index: number) => (
          <Surface style={styles.surface} key={dataItem.asset}>
            {Object.entries(dataItem).map(([key, value]) => (
              <>
                <View key={key} style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7}}>
                  <Text variant='labelMedium' style={{fontWeight: '500', textTransform: 'capitalize'}}>
                    {key}
                  </Text>
                  <Text variant='labelMedium' style={{fontWeight: '300'}}>
                    {value}
                  </Text>
                </View>
                {(key === 'asset' || key === 'maintenance') && <Divider />}
              </>
            ))}
          </Surface>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default WorkOrders

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, margin: 15},
    title: {color: theme.colors.outline, fontWeight: '400'},
    surface: {backgroundColor: 'white', paddingHorizontal: rem(20), padding: rem(10), borderRadius: 15}
  })
