import PieChart from 'react-minimal-pie-chart';

interface Props {}

export function Email(props: Props): React.ReactElement {
	return (
		<div>
			<PieChart
				animate={true}
				animationDuration={600}
				animationEasing="ease-out"
				cx={50}
				cy={50}
				data={[
					{
						color: '#E38627',
						title: 'One',
						value: 10
					},
					{
						color: '#C13C37',
						title: 'Two',
						value: 15
					},
					{
						color: '#6A2135',
						title: 'Three',
						value: 20
					}
				]}
				label={false}
				labelPosition={50}
				lengthAngle={360}
				lineWidth={15}
				onClick={undefined}
				onMouseOut={undefined}
				onMouseOver={undefined}
				paddingAngle={5}
				radius={50}
				rounded={false}
                startAngle={0}
                style={{
                    height: '100px'
                  }}
				viewBoxSize={[ 100, 100 ]}
			/>
		</div>
	);
}
