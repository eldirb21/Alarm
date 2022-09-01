import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../components/atoms/Container'
import AppBar from '../../components/molecules/AppBar'
import Content from '../../components/atoms/Content'

export default function Timer() {
	return (
		<Container >
			<AppBar title={"Timer"}bordered/>
			<Content>
				
			</Content>
		</Container>
	)
}