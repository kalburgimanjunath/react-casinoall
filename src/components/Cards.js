import React from 'react';
export const ListView = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {data &&
        data.map((item) => {
          return (
            <div style={{ padding: 20 }}>
              <div>
                <img
                  src="https://picsum.photos/200"
                  style={{ width: 200, height: 150, borderRadius: 10 }}
                />
              </div>
              <a
                style={{
                  marginTop: '-70px',
                  marginLeft: '80px',
                  position: 'absolute',
                  color: 'white',
                }}
                href={`./item/${item}`}
              >
                Play
              </a>
              <div>{item}</div>
            </div>
          );
        })}
    </div>
  );
};
export default function Cards({ title, data }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <h1 style={{ margin: 0, padding: 0 }}>{title}</h1>
        <div className="more">more</div>
      </div>
      <ListView data={data} />
    </div>
  );
}
