<template>
  <div class="not-found">
    <div class="redacted-info">
      <div class="redacted-entry">
        <div class="redacted-value anim-2">&nbsp;</div>
      </div>
      <div class="redacted-entry">
        <div class="redacted-label anim-4">&nbsp;</div>
        <div class="redacted-value anim-1">&nbsp;</div>
      </div>
      <div class="redacted-entry">
        <div class="redacted-label anim-2">&nbsp;</div>
        <div class="redacted-value anim-3">&nbsp;</div>
      </div>
      <div class="redacted-entry">
        <div class="redacted-ranking anim-4">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  position: relative;
  width: 246px;
  user-select: none;
}

.not-found::before {
  content: '';
  display: block;
  background: url('../assets/img/redacted.png') no-repeat 0 -104px;
  width: 100%;
  height: 52px;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: 2;
}

.redacted-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0.8;
  z-index: 1;
}

.redacted-label {
  background: url('../assets/img/redacted-label.png') repeat-y center left;
}

.redacted-value {
  background: url('../assets/img/redacted-value.png') repeat-y center left;
}

.redacted-ranking {
  background: url('../assets/img/redacted-ranking.png') repeat-y center left;
}

.anim-1 {
  animation: anim-1 1s linear infinite;
}

.anim-2 {
  animation: anim-2 1s linear infinite;
}

.anim-3 {
  animation: anim-3 1s linear infinite;
}

.anim-4 {
  animation: anim-4 1s linear infinite;
}

@keyframes anim-1 {
  0% {
    background-position: left 650px;
  }

  38% {
    background-position: left 650px;
  }

  39% {
    background-position: left 781px;
  }

  55% {
    background-position: left 781px;
  }

  56% {
    background-position: left 679px;
  }

  65% {
    background-position: left 679px;
  }

  66% {
    background-position: left 591px;
  }

  87% {
    background-position: left 591px;
  }

  88% {
    background-position: left 555px;
  }

  100% {
    background-position: left 555px;
  }
}

@keyframes anim-2 {
  0% {
    background-position: left 1469px;
  }

  22% {
    background-position: left 1469px;
  }

  23% {
    background-position: left 1458px;
  }

  35% {
    background-position: left 1458px;
  }

  36% {
    background-position: left 1391px;
  }

  52% {
    background-position: left 1391px;
  }

  53% {
    background-position: left 1491px;
  }

  80% {
    background-position: left 1491px;
  }

  81% {
    background-position: left 465px;
  }

  100% {
    background-position: left 465px;
  }
}

@keyframes anim-3 {
  0% {
    background-position: left 210px;
  }

  28% {
    background-position: left 210px;
  }

  29% {
    background-position: left 315px;
  }

  39% {
    background-position: left 315px;
  }

  40% {
    background-position: left 1211px;
  }

  51% {
    background-position: left 1211px;
  }

  52% {
    background-position: left 701px;
  }

  68% {
    background-position: left 701px;
  }

  69% {
    background-position: left 1841px;
  }

  100% {
    background-position: left 1841px;
  }
}

@keyframes anim-4 {
  0% {
    background-position: left 531px;
  }

  60% {
    background-position: left 531px;
  }

  61% {
    background-position: left 1115px;
  }

  72% {
    background-position: left 1115px;
  }

  73% {
    background-position: left 684px;
  }

  79% {
    background-position: left 684px;
  }

  80% {
    background-position: left 991px;
  }

  94% {
    background-position: left 991px;
  }

  95% {
    background-position: left 1122px;
  }

  100% {
    background-position: left 1122px;
  }
}
</style>
