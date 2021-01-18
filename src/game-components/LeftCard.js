const LeftCard = ({ info, number }) => {
    return (
      <div className="quiz-card">
        <div class="left number">{ number + 1 }</div>
        <div class="center">{ info.side_a }</div>
      </div>
    )
}

export default LeftCard