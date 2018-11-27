import React from 'react';
import { Animated } from 'react-native';


const animationDuration = 1000;


class Fade extends React.Component {
 constructor(props) {
 super(props);

 this.state = {
 isVisible: props.isVisible,
 };


 this.opacity = props.isVisible
? new Animated.Value(1)
: new Animated.Value(0);


 this.fadeIn = this.fadeIn.bind(this);
 this.fadeOut = this.fadeOut.bind(this);
 }

 fadeIn() {
 this.setState({ isVisible: true }, () => {
 Animated.timing(this.opacity, {
 toValue: 1,
 duration: animationDuration,
 }).start();
 });
 }

 fadeOut() {
 Animated.timing(this.opacity, {
 toValue: 0,
 duration: animationDuration,
 }).start(() => {
 this.setState({ isVisible: false });
 });
 }

 componentWillReceiveProps(nextProps) {
 if (nextProps.isVisible === this.props.isVisible) return;

 if (nextProps.isVisible) {
 this.fadeIn();
 } else {
 this.fadeOut();
 }
 }

 render() {
 return (
 <Animated.View style={{ opacity: this.opacity }}>
 {this.state.isVisible ? this.props.children : null}
 </Animated.View>
 );
 }
}

export default Fade;