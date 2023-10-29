render() {
    return (
        <><View style={styles.container}>
            <View style={styles.authorContainer}>
                <View style={styles.authorImageContainer}>
                    <Image
                        source={require("../assets/profile_img.png")}
                        styke={styles.profileImage}
                    ></Image>
                </View>
            </View> style={styles.authorNameContainer}>
            <Text style={styles.authorNameText}> {this.props.post.author}</Text>
        </View><Image source={require("../assets/post.jpeg")} styles={styles.postImage} /><View style={styles.captionContainer}>
                <Text style={styles.captionText}>
                    {this.props.post.caption}
                </Text>
            </View><View style={styles.likeButton}>
                <Ionicons name={"heart"} size={CSSVariableReferenceValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
            </View></>
                     </View>
                </View>
            </View>
    


               
    )
}