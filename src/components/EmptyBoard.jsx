import React, { useState } from 'react'

export default function EmptyBoard({type}) {
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  return (
    <div>

        <h3>
            {
                type === "edit"? "This board is empty. Create a new column to get started."
                : "There are no boards available. Create a new board to get started"
            }
        </h3>
    </div>
  )
}
