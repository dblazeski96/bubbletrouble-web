import React from 'react'

const Plan = () => (
  <form
    name="plan"
    style={{
      width: 400,
      height: 400,
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      borderWidth: '1px',
      borderColor: 'black',
      borderStyle: 'solid',
      borderRadius: 4
    }}
  >
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
      Планирај со нас
    </div>
    <input
      placeholder="Интитуција"
      name="intitution"
      value=""
      type="text"
      style={styles.input}
    />
    <input name="" value="" type="text" style={styles.input} />
    <input
      placeholder="Цел"
      name="goal"
      value=""
      type="text"
      style={styles.input}
    />
    <input
      placeholder="Опис"
      name="description"
      value=""
      type="text"
      style={styles.input}
    />
    <input
      name="sumbit"
      value="Прати"
      type="submit"
      style={[styles.input, { backgroundColor: 'red' }]}
    />
  </form>
)

const styles = {
  input: {
    width: '100%',
    height: 24,
    borderRadius: 4,
    fontSize: 16,
    borderWidth: '1px'
  }
}

export default Plan
