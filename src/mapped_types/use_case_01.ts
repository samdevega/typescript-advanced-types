(() => {
  type Point = {
    x: number,
    y: number,
    z: number
  }

  // This way implies code duplication
  /**
   *  type ReadonlyPoint = {
        readonly x: number,
        readonly y: number,
        readonly z: number
      }
   */
  
  // Mapped Type version Explanation (Readonly is including in TS)
  /**
   *  type Readonly<T> = {
        readonly [Item in keyof T]: T[Item]
      }
   */
  
  const center: Readonly<Point> = {
    x: 0,
    y: 0,
    z: 0
  }

  center.x = 100 // Not allowed
})()