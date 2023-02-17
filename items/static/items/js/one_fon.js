/*!
ColorfulVitamins.js
Copyright (c) 2023 Wakana Y.K.
URL:https://codepen.io/wakana-k/pen/mdjMJZK
*/
!function() {
    "use strict";
    function t() {
        e.aspect = window.innerWidth / window.innerHeight, e.updateProjectionMatrix(), i.setSize(window.innerWidth, window.innerHeight);
    }
    let e, n, i, o, a, r, s, d, E, c;
    const l = 700, w = 50, h = .8, u = function() {
        const t = new THREE.Vector3(), e = new THREE.Euler(), n = new THREE.Quaternion(), i = new THREE.Vector3();
        return function(o) {
            t.x = (2 * Math.random() - 1) * w, t.y = (2 * Math.random() - 1) * w, t.z = (2 * Math.random() - 1) * w,
            e.x = 2 * Math.random() * Math.PI, e.y = 2 * Math.random() * Math.PI, e.z = 2 * Math.random() * Math.PI,
            n.setFromEuler(e), i.set(1, 1, 1), o.compose(t, n, i);
        };
    }();
    !function() {
        const H = document.createElement("div");
        document.body.appendChild(H), n = new THREE.Scene(), (i = new THREE.WebGLRenderer({
            antialias: !0,
            alpha: !0
        })).setPixelRatio(window.devicePixelRatio), i.setSize(window.innerWidth, window.innerHeight),
        i.outputEncoding = THREE.sRGBEncoding, H.appendChild(i.domElement), (e = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .1, 3 * w)).position.set(0, 0, w * Math.sqrt(2)),
        e.lookAt(0, 0, 0);
        const R = new THREE.AmbientLight(16777215, .3);
        n.add(R);
        const m = new THREE.DirectionalLight(16777215, 1);
        m.position.set(0, 2 * w, 0), n.add(m), n.fog = new THREE.FogExp2(16101802, .003),
        r = new THREE.MeshPhongMaterial({
            shininess: 100
        }), a = new THREE.CapsuleGeometry(h, 3 * h, 8, 20), s = a.clone(), E = a.clone(),
        function() {
            const t = (a = a.clone()).attributes.position;
            for (let e = 0; e < t.count; e++) t.getY(e) > 0 ? s.attributes.position.setY(e, 0) : E.attributes.position.setY(e, 0);
        }();
        const M = new THREE.Color(), p = new THREE.Matrix4();
        d = new THREE.InstancedMesh(s, r, l), (c = d.clone()).geometry = E;
        for (let t = 0; t < l; t++) u(p), d.setMatrixAt(t, p), d.setColorAt(t, M.setHSL(Math.abs(THREE.MathUtils.randInt(-1e3, 1e3) / 1e3), 1, THREE.MathUtils.randInt(350, 650) / 1e3)),
        c.setMatrixAt(t, p), c.setColorAt(t, M.setHSL(Math.abs(THREE.MathUtils.randInt(-1e3, 1e3) / 1e3), 1, THREE.MathUtils.randInt(500, 800) / 1e3));
        n.add(d), n.add(c), (o = new THREE.OrbitControls(e, i.domElement)).autoRotate = !0,
        o.autoRotateSpeed = 1, o.enableDamping = !0, o.enablePan = !1, o.minDistance = .1,
        o.maxDistance = w * Math.sqrt(2), o.minPolarAngle = 0, o.maxPolarAngle = Math.PI / 2,
        o.target.set(0, 0, 0), o.update(), window.addEventListener("resize", t);
    }(), function t() {
        requestAnimationFrame(t), o.update(), i.render(n, e);
    }();
}();