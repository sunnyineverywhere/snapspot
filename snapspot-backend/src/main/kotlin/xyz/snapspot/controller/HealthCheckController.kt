// Health Check Controller in Kotlin

package xyz.snapspot.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/health-check")
class HealthCheckController {
          @GetMapping
          fun healthCheck(): String {
                    return "OK"
          }
}
