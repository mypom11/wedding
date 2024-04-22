import { useEffect, useRef } from 'react'
import $ from 'jquery'

function useSakura(containerId, options) {
  const sakuraContainer = useRef(null)
  const petals = useRef([])
  const intervalRef = useRef(null)

  useEffect(() => {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function prefixedEvent(element, type, callback) {
      var prefixes = ['moz', 'ms', 'o', 'webkit', '']
      var prefCount = prefixes.length

      for (var i = 0; i < prefCount; i++) {
        if (!prefixes[i]) {
          type = type.toLowerCase()
        }

        element.get(0).addEventListener(prefixes[i] + type, callback, false)
      }
    }

    var defaults = {
      blowAnimations: [
        'blow-soft-left',
        'blow-medium-left',
        'blow-hard-left',
        'blow-soft-right',
        'blow-medium-right',
        'blow-hard-right',
      ],
      className: 'sakura',
      fallSpeed: 3,
      maxSize: 14,
      minSize: 9,
      swayAnimations: [
        'sway-0',
        'sway-1',
        'sway-2',
        'sway-3',
        'sway-4',
        'sway-5',
        'sway-6',
        'sway-7',
        'sway-8',
      ],
      petalLifetime: 5000, // 꽃잎이 유지될 시간 (밀리초)
    }

    options = Object.assign({}, defaults, options)

    var documentHeight = document.documentElement.clientHeight
    var documentWidth = document.documentElement.clientWidth
    var container = document.getElementById(containerId)

    sakuraContainer.current = $('<div class="sakura-container" />').appendTo(
      container
    )

    startGeneratingPetals()

    $(window).resize(function () {
      documentHeight = $(document).height()
      documentWidth = $(document).width()
    })

    function startGeneratingPetals() {
      intervalRef.current = setInterval(createPetal, options.newOn)
    }

    function stopGeneratingPetals() {
      clearInterval(intervalRef.current)
    }

    function createPetal() {
      var blowAnimation =
        options.blowAnimations[
          Math.floor(Math.random() * options.blowAnimations.length)
        ]
      var swayAnimation =
        options.swayAnimations[
          Math.floor(Math.random() * options.swayAnimations.length)
        ]
      var fallTime =
        (Math.round(documentHeight * 0.007) + Math.random() * 5) *
        options.fallSpeed

      var animations =
        'fall ' +
        fallTime +
        's linear 0s 1' +
        ', ' +
        blowAnimation +
        ' ' +
        ((fallTime > 30 ? fallTime : 30) - 20 + getRandomInt(0, 20)) +
        's linear 0s infinite' +
        ', ' +
        swayAnimation +
        ' ' +
        getRandomInt(2, 4) +
        's linear 0s infinite'
      var petal = $('<div class="' + options.className + '" />')
      var size = getRandomInt(options.minSize, options.maxSize)
      var startPosLeft = Math.random() * documentWidth - 100
      var startPosTop = -(Math.random() * 20 + 15)

      prefixedEvent(petal, 'AnimationEnd', function () {
        $(this).remove()
      })

      prefixedEvent(petal, 'AnimationIteration', function (ev) {
        if ($.inArray(ev.animationName, options.blowAnimations) != -1) {
          $(this).remove()
        }
      })

      petal
        .css({
          '-webkit-animation': animations,
          '-o-animation': animations,
          '-ms-animation': animations,
          '-moz-animation': animations,
          animation: animations,
          height: size,
          left: startPosLeft,
          'margin-top': startPosTop,
          width: size,
        })
        .appendTo(sakuraContainer.current)

      // 꽃잎이 생성될 때마다 고유한 ID 부여
      var petalId = new Date().getTime()
      petals.current.push({ id: petalId, createdAt: Date.now() })

      // 꽃잎이 일정 시간이 지난 후에 삭제
      setTimeout(() => {
        removePetal(petalId)
      }, options.petalLifetime)
    }

    function removePetal(petalId) {
      var indexToRemove = petals.current.findIndex(
        (petal) => petal.id === petalId
      )
      if (indexToRemove !== -1) {
        petals.current.splice(indexToRemove, 1)
      }
    }

    return () => {
      stopGeneratingPetals()
      sakuraContainer.current.remove()
    }
  }, [containerId, options])
}

export default useSakura
