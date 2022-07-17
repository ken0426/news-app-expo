import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import News from './components/News';
import Constants from 'expo-constants';
import axios from 'axios';

const apiKey = Constants.manifest.extra.newsApiKey;

const Uri = `https://newsapi.org/v2/everything?q=apple&from=2022-07-16&to=2022-07-16&sortBy=popularity&apiKey=${apiKey}`;

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const res = await axios.get(Uri);
    setNews(res.data.articles);
  };

  const newData = ({ item }) => {
    return (
      <News
        imageUri={item.urlToImage}
        title={item.title}
        subText={item.publishedAt}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={news} renderItem={newData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
