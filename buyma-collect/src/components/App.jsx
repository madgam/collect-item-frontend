import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://stark-sands-18335.herokuapp.com';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [renderData, setRenderData] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const exceuteQuery = () => {
    const tmpText = searchText.replace(/\n/gm, ',');
    setSearchText(tmpText);
    setRenderData([]);
    const f = async () => {
      await axios
        .post(`${BASE_URL}/items`, { url: searchText })
        .then((res) => {
          setRenderData(res.data);
        })
        .catch((error) => {
          alert('データ取得に失敗しました。');
        });
    };
    f();
  };

  const styles = {
    c1: {
      width: 200,
    },
    c2: {
      width: 200,
    },
    c3: {
      width: 200,
    },
    c4: {
      width: 200,
    },
    c5: {
      width: 200,
    },
    c6: {
      width: 200,
    },
    c7: {
      width: 200,
    },
    c8: {
      width: 200,
    },
    c9: {
      width: 200,
    },
    c10: {
      width: 200,
    },
  };

  return (
    <>
      <div>
        <textarea
          style={{ width: '80%', height: 200, margin: 20 }}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <div>
        <button
          style={{ marginLeft: 20 }}
          type='button'
          onClick={() => exceuteQuery()}
        >
          ダウンロード
        </button>
      </div>
      <div style={{ margin: 20 }}>
        <div style={{ display: 'flex' }}>
          <div style={styles.c1}>URL</div>
          <div style={styles.c2}>商品名</div>
          <div style={styles.c3}>説明文</div>
          <div style={styles.c4}>素材</div>
          <div style={styles.c5}>カラー</div>
          <div style={styles.c6}>商品型番</div>
          <div style={styles.c7}>コレクション</div>
          <div style={styles.c8}>価格</div>
          <div style={styles.c9}>最小サイズ</div>
          <div style={styles.c10}>最大サイズ</div>
        </div>
        {renderData.map((d, index) => (
          <div key={index} style={{ display: 'flex' }}>
            <div style={styles.c1}>{d.url}</div>
            <div style={styles.c2}>{d.item_name}</div>
            <div style={styles.c3}>{d.description}</div>
            <div style={styles.c4}>{d.material}</div>
            <div style={styles.c5}>{d.color}</div>
            <div style={styles.c6}>{d.item_no}</div>
            <div style={styles.c7}>{d.collection}</div>
            <div style={styles.c8}>{d.price}</div>
            <div style={styles.c9}>{d.size_minimum}</div>
            <div style={styles.c10}>{d.size_max}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
